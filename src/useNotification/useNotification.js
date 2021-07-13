export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotification = () => {
    if (Notification.permission !== "granted") {
      console.log("1");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("3");
          new Notification(title, options);
        } else {
          console.log("4");
          return;
        }
      });
    } else {
      console.log("2");
      new Notification(title, options);
    }
  };
  return fireNotification;
};
