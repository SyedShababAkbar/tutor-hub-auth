import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const TuitionRequest = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferred_gender: "",
    city: "",
    area: "",
    class: "",
    subject_course: "",
    school_institution: "",
    board: "",
    additional_comment: "",
    mode_of_tuition: "",
  });

  const handleWhatsApp = () => {
    // Replace with your WhatsApp number
    window.open("https://wa.me/923001234567", "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("tuition_requests").insert([formData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your tuition request has been submitted. We'll connect you with a tutor soon.",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        preferred_gender: "",
        city: "",
        area: "",
        class: "",
        subject_course: "",
        school_institution: "",
        board: "",
        additional_comment: "",
        mode_of_tuition: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full" />
            <span className="font-bold text-xl">KEEP TUTORS</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-6">
            Contact Our Operator on WhatsApp or Submit the Form and you will be connected with the tutor in no time
          </h1>
          
          <Button 
            onClick={handleWhatsApp}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-6 text-lg"
          >
            WhatsApp
          </Button>
        </div>

        <div className="text-center my-8">
          <p className="text-3xl font-semibold">Or</p>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-lg font-medium mb-2">
              Fill out this form and we will connect you with the tutor shortly.
            </p>
            <p className="text-red-600 text-sm">
              (For Parents and Students Only, Not For Teachers.)
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number *</Label>
              <Input
                id="phone"
                placeholder="333-XXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Preferred Tutor Gender *</Label>
              <Select
                value={formData.preferred_gender}
                onValueChange={(value) => setFormData({ ...formData, preferred_gender: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                placeholder="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="area">Area *</Label>
              <Input
                id="area"
                placeholder="Area"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="class">Class *</Label>
              <Input
                id="class"
                placeholder="Class"
                value={formData.class}
                onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject/Course *</Label>
              <Input
                id="subject"
                placeholder="Subject/Course"
                value={formData.subject_course}
                onChange={(e) => setFormData({ ...formData, subject_course: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="school">School/Institution</Label>
              <Input
                id="school"
                placeholder="School/Institution"
                value={formData.school_institution}
                onChange={(e) => setFormData({ ...formData, school_institution: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="board">Board</Label>
              <Input
                id="board"
                placeholder="Board"
                value={formData.board}
                onChange={(e) => setFormData({ ...formData, board: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mode">Mode of tuition *</Label>
              <Select
                value={formData.mode_of_tuition}
                onValueChange={(value) => setFormData({ ...formData, mode_of_tuition: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="home">Home Tuition</SelectItem>
                  <SelectItem value="center">Tuition Center</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Additional Comment/Description</Label>
              <Textarea
                id="comment"
                placeholder="Any additional details..."
                value={formData.additional_comment}
                onChange={(e) => setFormData({ ...formData, additional_comment: e.target.value })}
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full py-6 text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12 py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold mb-2">Forget School, KEEP TUTORS</p>
            <p className="text-sm text-muted-foreground">© 2024 Keep Tutors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TuitionRequest;
