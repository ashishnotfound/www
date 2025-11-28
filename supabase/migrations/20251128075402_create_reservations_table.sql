/*
  # Create Reservations Table

  1. New Tables
    - `reservations`
      - `id` (uuid, primary key) - Unique identifier for each reservation
      - `name` (text) - Guest name
      - `email` (text) - Guest email address
      - `phone` (text) - Guest phone number
      - `date` (date) - Reservation date
      - `time` (text) - Reservation time slot
      - `party_size` (integer) - Number of guests
      - `special_requests` (text, optional) - Any special requests or dietary restrictions
      - `created_at` (timestamptz) - Timestamp when reservation was created
      - `status` (text) - Reservation status (pending, confirmed, cancelled)

  2. Security
    - Enable RLS on `reservations` table
    - Add policy for anyone to create reservations (public booking)
    - Add policy for authenticated users to view all reservations (admin access)

  3. Notes
    - The table allows public insertions for guest bookings
    - Status defaults to 'pending' for new reservations
    - Phone and special_requests are optional fields
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  date date NOT NULL,
  time text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  special_requests text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create reservations"
  ON reservations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all reservations"
  ON reservations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update reservations"
  ON reservations
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
