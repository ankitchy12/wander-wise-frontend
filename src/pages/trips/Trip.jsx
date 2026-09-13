import React, { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { EllipsisVertical, Plus } from "lucide-react";
import api from "../../api/axios";
import { toast } from "sonner";
import { formatDate } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Trip = () => {
  const [trips, setTrips] = useState([]);
  const [dependency, setDependency] = useState(0);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await api.get("/trips");
        setTrips(response.data);
      } catch (error) {
        toast.error("Some error occur while fetching trips");
        console.log(error);
      }
    };

    fetchTrips();
  }, [dependency]);

  const onDelete = async (tripId) => {
    try {
      const response = await api.delete(`/trips/${tripId}`);
      if (response.status === 200) {
        toast.success("Trip deleted successfully");
        setDependency(dependency + 1);
      }else {
        toast.error("Some error occur while deleting trip");
      }

    } catch (error) {
      toast.error("Some error occur while deleting trip");
      console.log(error);                                       
    }
  }



  return (
    <div className="px-20 py-24">
      <Card>
        <CardHeader className="border-b">
          <CardTitle>See your trips</CardTitle>
          <CardDescription> View and manage all your trips </CardDescription>
          <CardAction>
            <a href="/trips/add">
              <Button>
                {" "}
                <Plus />
                Add Trip{" "}
              </Button>
            </a>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-6">
            {trips.length == 0 ? (
              <div className="text-3xl font-semibold text-center py-20 ">
                {" "}
                You do not have any trip to show. Create a new trip
              </div>
            ) : (
              trips.map((trip) => {
                return (
                  <Card key={trip._id}>
                    <CardHeader className="border-b">
                      <CardTitle>{trip.title}</CardTitle>
                      <CardDescription>
                        {formatDate(trip.startDate)} -{" "}
                        {formatDate(trip.endDate)}
                      </CardDescription>
                      <CardAction>
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={<Button variant="outline" />}
                          >
                            <EllipsisVertical />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuGroup>
                              <DropdownMenuLabel>Manage Trip</DropdownMenuLabel>
                              <DropdownMenuItem><a  className="w-full" href={`/trips/${trip._id}/view`}>View Details</a></DropdownMenuItem>
                              <DropdownMenuItem><a  className="w-full" href={`/trips/edit/${trip._id}`}>Edit Details</a></DropdownMenuItem>
                              <DropdownMenuItem onClick={() => onDelete(trip._id)}>Delete</DropdownMenuItem>
                            </DropdownMenuGroup>
                            
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <p>Budget: rs. {trip.budget.total}</p>
                      <p>Spent: rs. {trip.budget.spent}</p>
                    </CardContent>
                    <CardFooter>
                      <p>Destination:{trip.destinations.join(", ")}</p>
                    </CardFooter>
                  </Card>
                );
              })
            )}
          </div>
        </CardContent>

        <CardFooter>
          <p className="text-gray-500 ">Total Trips: {trips.length}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Trip;
