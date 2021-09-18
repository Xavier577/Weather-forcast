import axios from "axios";

export const sendToServer = <T>(route: string, data: T) => {
  axios.post(route, data);
};

export const getUserPosition = () => {
  return new Promise<GeolocationPosition | undefined>((resolve, reject) =>
    navigator.permissions
      ? // Permission API is implemented
        navigator.permissions
          .query({
            name: "geolocation"
          })
          .then((permission) =>
            // is geolocation granted?
            permission.state === "granted"
              ? navigator.geolocation.getCurrentPosition((position) =>
                  resolve(position)
                )
              : resolve(undefined)
          )
      : // Permission API was not implemented
        reject(new Error("Permission API is not supported"))
  );
};
