import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [guestList, setGuestList] = useState([]);

  const handleSignUp = () => {
    if (name.trim() && time.trim()) {
      setGuestList([...guestList, { name, time }]);
      setName("");
      setTime("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <Card className="w-full max-w-md mx-4 my-8">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-bold text-gray-800">
            Festival Wedding Vibe
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to the most hilarious and unforgettable wedding booking system!
          </p>
          <Separator className="my-4" />
          <div className="flex flex-col items-center space-y-4">
            <Input
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
            <Select onValueChange={(value) => setTime(value)} value={time}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                <SelectItem value="01:00 PM">01:00 PM</SelectItem>
                <SelectItem value="02:00 PM">02:00 PM</SelectItem>
                <SelectItem value="03:00 PM">03:00 PM</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSignUp} className="w-full">
              Sign Up
            </Button>
          </div>
          <Separator className="my-4" />
          <div className="mt-4">
            <h2 className="text-2xl font-semibold text-gray-800">Guest List</h2>
            <ul className="list-disc list-inside mt-2 text-left">
              {guestList.map((guest, index) => (
                <li key={index} className="text-gray-700">
                  {guest.name} - {guest.time}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;