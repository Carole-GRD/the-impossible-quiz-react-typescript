import { createContext, useState, ReactNode } from "react";

interface LiveContextProps {
    live: number;
    decrementLive: () => void;
  }

export const LiveContext = createContext<LiveContextProps | undefined>(undefined);

interface LiveProviderProps {
    children: ReactNode;
  }

export default function LiveProvider(props: LiveProviderProps) {

    const [live, setLive] = useState<number>(10);

    function decrementLive() {
        setLive(live => live - 1)
    }

    return (
        <LiveContext.Provider value={{live, decrementLive}}>
            {props.children}
        </LiveContext.Provider>
    )
}