import {Avatar, Chip} from "@mui/material";
import Icon from '@mui/material/Icon';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
import './style.css';


export default function Event({title, image, checked, onClickEvent, id}) {
    return (
        <Chip
            className="root"
            avatar={<Avatar alt={title} src={image} />}
            label={title}
            variant="outlined"
            deleteIcon={<Icon>{checked ? <StarRateIcon color="primary"/> : <StarBorderIcon />}</Icon>}
            onDelete={() => {}}
            clickable
            onClick={() => onClickEvent(id, checked)}
        />
    )
}
