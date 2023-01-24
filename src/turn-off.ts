import { showHUD, showToast, Toast } from "@raycast/api";
import { findDevice, turnOff } from "litra";

export default async function main() {
  try {
    const device = findDevice();

    if (device) {
      turnOff(device);
      await showHUD("Turned off");
    } else {
      throw "No device found";
    }
  } catch (e) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Oops! Something went wrong.",
      message: e as string,
    });
  }
}
