import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Tutor Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Connect with expert tutors or share your knowledge with students
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            onClick={() => navigate('/auth?type=tutor')}
            className="px-8"
          >
            Continue as Tutor
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate('/tuition-request')}
            className="px-8"
          >
            Find a Tutor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
