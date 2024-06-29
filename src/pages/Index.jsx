import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [name, setName] = useState("");
  const [guestList, setGuestList] = useState([]);

  const handleSignUp = () => {
    if (name.trim()) {
      setGuestList([...guestList, name]);
      setName("");
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
                  {guest}
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