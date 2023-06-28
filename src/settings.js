import { createClient, createMicrophoneAndCameraTracks } from 'agora-rtc-react';

const appId = "1cb6910f9cf642fab275cf598f22582f"
const token = "007eJxTYPDZ37gl+8xSyxW1vk1VKUKdvhxOrRem7k298/Ge+aqlGU0KDIbJSWaWhgZplslpZiZGaYlJRuamyWmmlhZpRkamFkZpy97OSmkIZGRo3XGHkZEBAkF8FobcxMw8BgYAsmYhjA=="

export const config = {mode: "rtc", codec: "vp8", appId: appId, token: token}
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";