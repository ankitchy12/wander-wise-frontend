import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axios";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Car, SquarePen, Trash2 } from "lucide-react";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";

const BaggageDetails = () => {
  const { id } = useParams();

  const [baggages, setBaggage] = useState([]);
  const [dependency, setDependency] = useState(0);

  useEffect(() => {
    const fetchBaggages = async () => {
      try {
        const response = await api.get(`/${id}baggages`);
        setBaggage(Response.data);
      } catch (error) {
        toast.error(error.message || "Error while fetching trips");
      }
    };

    fetchBaggages();
  }, [dependency]);

  const addBaggage = async ()=> {
    const name = document.getElementById("baggageInput")

    try{
        const response = await api.post(`/${id}/baggages`, {name: name.value});

        if(response.status === 201)
            toast.success("Baggage added successfully");
            name.value = "";
            setDependency( dependency + 1 );
    }else{
        toast.error("Error while adding baggage")
    }catch(error){
        toast.error(error.message || "Error while adding baggage")
    }
    }

  }

  return (
    <div className="px-20 py-24">
      <Card>
        <CardHeader className="border-b">
          <CardTitle>See baggage for this trip</CardTitle>
          <CardDescription>View and manage baggages</CardDescription>
          <CardAction>
            <Dialog>
              <DialogTrigger><Button>Add Baggage</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Baggage</DialogTitle>
                  <DialogDescription>
                    Provide the name of item you want to pack for this trip.
                  </DialogDescription>
                </DialogHeader>

                <div>
                    <Label htmlfor= "baggageInput" className="mb-2">Name of items </Label>
                    <Input type="text" placeholder="medicine" id="baggageInput" />
                </div>

                <Button onClick={addBaggage} className="w-full">Submit</Button>
              </DialogContent>
            </Dialog>
          </CardAction>

          <CardContent>
            <div className="grid grid-cols-3 gap-6">
              <div className="border rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <p className="text-lg font-medium">Medicine</p>
                </div>

                <div className="space-x-1">
                  <Button variant="outline" size="icon">
                    {" "}
                    <SquarePen />
                  </Button>
                  <Button variant="outline" size="icon">
                    {" "}
                    <Trash2 />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p>Total Baggages: {baggages.length}</p>
          </CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};

export default BaggageDetails;
