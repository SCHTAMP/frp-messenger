// import socket from "@/listeners/socket";
import { useAxios } from "@vueuse/integrations/useAxios";

export function useRoom() {
  const { isLoading, error, execute } = useAxios();

  const bindRoomState = () => {
    // socket.off("room:destroyd");
    // socket.on("room:destroyd", async () => {
    //   await leaveRoom();
    // });
  };

  const joinRoom = async ({
    username,
    roomCode,
  }: {
    username: string;
    roomCode: string;
  }) => {};

  const leaveRoom = async () => {};

  const destroyRoom = async () => {};

  return {
    isLoading,
    error,
    joinRoom,
    leaveRoom,
    destroyRoom,
    bindRoomState,
  };
}
