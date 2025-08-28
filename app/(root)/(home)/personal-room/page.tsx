"use client";
import { Button } from "@/components/ui/button";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
      <h1 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
        {title}:
      </h1>
      <h1 className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
        {description}
      </h1>
    </div>
  );
};

const PersonalRoom = () => {
  const { user } = useUser();
  const client = useStreamVideoClient();
  const meetingId = user?.id || "guest-room";
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const { call } = useGetCallById(meetingId!);
  const router = useRouter();

  const startRoom = async () => {
    if (!client || !user) return;
    const newCall = client.call("default", meetingId!);
    if (!call) {
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
      router.push(`/meeting/${meetingId}?personal=true`);
    }
  };
  return (
    <section className="flex flex-col gap-10 size-full text-white">
      <h1 className="text-3xl font-bold">Personal Room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table
          title="Topic"
          description={`${user ? user.username : "Guest"}'s meeting room`}
        />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Invite ID" description={meetingLink!} />
      </div>
      <div className="flex gap-5">
        <Button
          className="bg-blue-1 hover:bg-blue-1/50 cursor-pointer"
          onClick={startRoom}
        >
          Start Personal Room
        </Button>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast("Link Copied");
          }}
          className="bg-blue-1 hover:bg-blue-1/50 cursor-pointer"
        >
          Copy Invite Link
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
