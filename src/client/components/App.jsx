import react, {useEffect} from "react";
import Toaster from "../components/Toast/Toast";
import { useToast } from "../components/Toast/useToast";
import { Theme } from "@radix-ui/themes";
import "./styles.css";
const App = ({children}) => {
    const toast = useToast();
    useEffect(() => {
        toast({ title: "Failed", subtitle: "Something went wrong!", mode: "negative" });
        toast({ title: "Success", subtitle: "Hurray!", mode: "positive", timer: 8000 });
        toast({ title: "Info", subtitle: "Cool info!", timer: 12000 });
        toast({ title: "Infinite", subtitle: "I'll always be here!", infinite: true });
      }, []);
      return (
        <Theme>
            {children}
            <Toaster />
        </Theme>
      )
};

export default App;