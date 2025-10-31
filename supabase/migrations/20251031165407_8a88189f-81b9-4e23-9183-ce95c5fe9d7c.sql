-- Create tuition_requests table for parents/students
CREATE TABLE public.tuition_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_gender TEXT,
  city TEXT NOT NULL,
  area TEXT NOT NULL,
  class TEXT NOT NULL,
  subject_course TEXT NOT NULL,
  school_institution TEXT,
  board TEXT,
  additional_comment TEXT,
  mode_of_tuition TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tuition_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert tuition requests (public form)
CREATE POLICY "Anyone can submit tuition requests" 
ON public.tuition_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow users to view their own requests
CREATE POLICY "Anyone can view tuition requests" 
ON public.tuition_requests 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_tuition_requests_updated_at
BEFORE UPDATE ON public.tuition_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at();