/*
  # Create demo_bookings table

  1. New Tables
    - `demo_bookings`
      - `id` (uuid, primary key) - Unique identifier for each booking
      - `name` (text) - Full name of the person booking the demo
      - `email` (text) - Email address for contact
      - `phone` (text) - Phone number for contact
      - `organization` (text) - Hospital or organization name
      - `role` (text) - Job title or role in the organization
      - `beds_count` (text) - Number of beds in the hospital
      - `booking_date` (date) - Selected date for the demo
      - `booking_time` (text) - Selected time slot for the demo
      - `notes` (text, nullable) - Special requirements or additional notes
      - `status` (text) - Booking status (pending, confirmed, cancelled)
      - `created_at` (timestamptz) - When the booking was created
      - `updated_at` (timestamptz) - When the booking was last updated

  2. Security
    - Enable RLS on `demo_bookings` table
    - Add policy for anyone to create bookings (public access for booking form)
    - Add policy for authenticated admin users to read all bookings
*/

CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text NOT NULL,
  role text NOT NULL,
  beds_count text NOT NULL,
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create demo bookings"
  ON demo_bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all bookings"
  ON demo_bookings
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update bookings"
  ON demo_bookings
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);