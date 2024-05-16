import { useEffect, useState } from "react";
import { Observable } from "rxjs";

const useSubscribe = <T>(observable: Observable<T>): T | undefined => {

    const [state, setState] = useState<T>()

    useEffect(() => {
        const subscriber = observable.subscribe((val: T) => setState(val));
        return () => subscriber.unsubscribe();
    }, [observable]);

    return state;
}

export default useSubscribe;