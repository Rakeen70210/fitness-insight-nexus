
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Apple, Activity } from 'lucide-react';

const Auth = () => {
  const { signInWithApple, user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleAppleSignIn = async () => {
    try {
      await signInWithApple();
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-600">
            <Activity className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Welcome to HealthViz
          </CardTitle>
          <CardDescription className="text-gray-600">
            Connect your Apple Watch data and get AI-powered health insights
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={handleAppleSignIn}
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 rounded-xl transition-colors"
            size="lg"
          >
            <Apple className="mr-2 h-5 w-5" />
            Continue with Apple
          </Button>
          <p className="text-xs text-center text-gray-500">
            Sign in to sync your health data and get personalized insights
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
