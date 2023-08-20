import { library } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faTimesCircle,
    faPlusCircle,
    faMobileAlt,
    faEnvelope,
    faMapMarkedAlt,
    faLock
} from "@fortawesome/react-fontawesome";

const Icons = () => {
    return library.add(
        faTrash,
        faSignOutAlt,
        faEdit,
        faTimesCircle,
        faPlusCircle,
        faMobileAlt,
        faEnvelope,
        faMapMarkedAlt,
        faLock
    );
};

export default Icons;