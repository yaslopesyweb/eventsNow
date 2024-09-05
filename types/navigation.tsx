export type RootStackParamsList = {
    Home: undefined;
    EventDetails: { eventName: string };
    Summary: { eventName: string; eventDate: string; eventLocation: string };
};