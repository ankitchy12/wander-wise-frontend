import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import api from "../api/axios";
import { toast } from "sonner";

const AcceptInvitation = () => {
  const nagivate = useNagivate();

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const accept = async () => {
    try {
      const response = await api.get(`/trips/${id}/invite/accept?
                token=${token}`);

      if (response.status === 200) {
        toast.success("Invitation accepted");
        nagivate("/trips");
      } else {
        toast.error("failed to accept invitation");
      }
    } catch (error) {
      toast.error(error.message || "failed to accept invitation");
      console.log(error);
    }
  };


return (
  <div>
    <Button onClick={accept}>Accept</Button>
  </div>
);
};

export default AcceptInvitation;
