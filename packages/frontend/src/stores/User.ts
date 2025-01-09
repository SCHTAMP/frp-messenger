import { type IUser } from "@/interfaces/User";
import { useAxios } from "@vueuse/integrations/useAxios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore("user", () => {
  const { isLoading, error, execute } = useAxios();
  const user = ref<IUser>();

  const updateUser = async (payload: any) => {
    const { data } = await execute("", payload);

    if (data.value && user.value) {
      user.value = {
        ...user.value,
        fullName: data.value.fullName,
        avatar: data.value.avatar,
      };
    }
  };

  const isUserAuth = async () => {
    const { data } = await execute("", {
      method: "GET",
      withCredentials: true,
      withXSRFToken: true,
    });
    if (data.value) {
      user.value = data.value;
    }
  };

  return {
    isUserAuth,
    updateUser,
    isLoading,
    error,
    user,
  };
});
