import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Typography from '@mui/material/Typography';

export default function HowItWorks() {
	return (
		<Timeline position="alternate">
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="secondary" sx={{padding: "0.6em"}}>
						<TouchAppIcon color="white" sx={{fontSize: "2em"}}/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '3em', px: 2 }}>
					<Typography variant="h5" component="span">
						Abonnez-vous
					</Typography>
					<Typography>Choisissez votre abonnement</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="primary" sx={{padding: "0.8em"}}>
						<AddShoppingCartIcon sx={{fontSize: "3em"}} />
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '3em', px: 2 }}>
					<Typography variant="h5" component="span">
						Ajoutez vos jeux de société
					</Typography>
					<Typography>Ajoutez les jeux que vous emprunter à votre liste de jeux</Typography>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<TimelineConnector />
					<TimelineDot color="secondary" sx={{padding: "0.6em"}}>
						<LocalShippingIcon sx={{fontSize: "2em"}}/>
					</TimelineDot>
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent sx={{ py: '3em', px: 2 }}>
					<Typography variant="h5" component="span">
						Recevez vos jeux
					</Typography>
					<Typography>Chaque mois nous vous livrons votre sélection chez vous !</Typography>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}
