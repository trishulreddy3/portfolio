import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Mail, Phone, Building, Calendar, User, Trash2, Reply } from 'lucide-react';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { formatDistanceToNow, format } from 'date-fns';

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string;
  phone?: string;
  timestamp: any;
  status: 'unread' | 'read';
}

const AdminMessageDetail = () => {
  const [message, setMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const { messageId } = useParams<{ messageId: string }>();
  const navigate = useNavigate();

  const fetchMessage = async () => {
    if (!messageId) return;
    
    try {
      const messageRef = doc(db, 'messages', messageId);
      const messageSnap = await getDoc(messageRef);
      
      if (messageSnap.exists()) {
        const messageData = { id: messageSnap.id, ...messageSnap.data() } as Message;
        setMessage(messageData);
        
        // Mark as read if unread
        if (messageData.status === 'unread') {
          await updateDoc(messageRef, { status: 'read' });
          setMessage({ ...messageData, status: 'read' });
        }
      } else {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error fetching message:', error);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async () => {
    if (!message || !confirm('Are you sure you want to delete this message?')) return;
    
    setDeleting(true);
    try {
      await deleteDoc(doc(db, 'messages', message.id));
      navigate('/admin');
    } catch (error) {
      console.error('Error deleting message:', error);
      setDeleting(false);
    }
  };

  const replyToMessage = () => {
    if (!message) return;
    const subject = `Re: ${message.subject}`;
    const body = `Hi ${message.name},\n\nThank you for your message. I'll get back to you soon!\n\nBest regards,\nTrishul Reddy`;
    const mailtoLink = `mailto:${message.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  useEffect(() => {
    fetchMessage();
  }, [messageId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Loading message...</p>
        </div>
      </div>
    );
  }

  if (!message) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Message Not Found</h2>
          <p className="text-muted-foreground mb-6">The message you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/admin')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Messages
          </Button>
        </Card>
      </div>
    );
  }

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'Unknown date';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return format(date, 'PPpp');
  };

  const getTimeAgo = (timestamp: any) => {
    if (!timestamp) return 'Unknown time';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const getStatusColor = (status: string) => {
    return status === 'unread' 
      ? 'bg-primary text-primary-foreground animate-pulse' 
      : 'bg-muted text-muted-foreground';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/admin')}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Messages
              </Button>
              <div>
                <h1 className="text-xl font-bold gradient-text">Message Details</h1>
                <p className="text-sm text-muted-foreground">Received {getTimeAgo(message.timestamp)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={getStatusColor(message.status)}>
                {message.status}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Main Message Card */}
        <Card className="mb-8 animate-fade-in overflow-hidden">
          <CardHeader className="bg-muted/30">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  {message.name}
                </CardTitle>
                <div className="space-y-2">
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {message.email}
                  </p>
                  {message.phone && (
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {message.phone}
                    </p>
                  )}
                  {message.company && (
                    <p className="text-muted-foreground flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      {message.company}
                    </p>
                  )}
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(message.timestamp)}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-4">
                <Button
                  onClick={replyToMessage}
                  className="hover:scale-110 transition-transform"
                >
                  <Reply className="h-4 w-4 mr-2" />
                  Reply
                </Button>
                <Button
                  variant="destructive"
                  onClick={deleteMessage}
                  disabled={deleting}
                  className="hover:scale-110 transition-transform"
                >
                  {deleting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  ) : (
                    <Trash2 className="h-4 w-4 mr-2" />
                  )}
                  Delete
                </Button>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Subject</h3>
                <p className="text-lg">{message.subject}</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">Message</h3>
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="whitespace-pre-wrap leading-relaxed text-foreground">
                    {message.message}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                onClick={replyToMessage}
                className="h-16 flex flex-col gap-2 hover:scale-105 transition-transform"
              >
                <Reply className="h-6 w-6" />
                <span>Reply via Email</span>
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/admin')}
                className="h-16 flex flex-col gap-2 hover:scale-105 transition-transform"
              >
                <ArrowLeft className="h-6 w-6" />
                <span>Back to Messages</span>
              </Button>
              
              <Button 
                variant="destructive"
                onClick={deleteMessage}
                disabled={deleting}
                className="h-16 flex flex-col gap-2 hover:scale-105 transition-transform"
              >
                {deleting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Trash2 className="h-6 w-6" />
                )}
                <span>Delete Message</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminMessageDetail;