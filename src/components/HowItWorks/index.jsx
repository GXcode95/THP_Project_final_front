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
import { Typography, Box, Container, Grid } from '@mui/material';
import deliver from "assets/images/delivery.svg";

const HowItWorks = () => {
	return (
		<Box
			component="section"
			sx={{ display: 'flex', bgcolor: 'primary', overflow: 'hidden' }}
		>
			<Container
				sx={{
					mt: 0,
					mb: 5,
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>

				<Typography variant="h3" marked="center" component="h2" sx={{ fontWeight: '800', paddingTop: 2, textAlign: 'center' }} className="title-pb" id="howitworks">
					HOW IT WORKS ?
				</Typography>
				<Grid container spacing={2} alignItems='center' sx={{ paddingTop: 5 }}>
					<Grid item xs={12} md={6}>
						<Box textAlign="center">
							<Typography variant="h5" className="title-r title-pb-7 " sx={{ textAlign: "left" }}>Chaque mois recevez vos jeux</Typography>
							<Typography variant="h5" className="title-r" color='secondary' sx={{ textAlign: "left", fontWeight: '600' }}>selon votre selection et votre abonnement</Typography>
						</Box>
						<img
							src={deliver}
							alt="curvy lines"
							width="90%"
						/></Grid>
					<Grid item xs={12} md={6}>
						<Timeline position="alternate">
							<TimelineItem>
								<TimelineSeparator>
									<TimelineConnector sx={{ width: '3px' }} />
									<TimelineDot color="secondary" sx={{ padding: "0.6em" }}>
										<TouchAppIcon color="white" sx={{ fontSize: "2em" }} />
									</TimelineDot>
									<TimelineConnector sx={{ width: '3px' }} />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '2em', px: 2 }}>
									<Typography variant="h5" component="span" className="title-pb">
										Abonnez-vous
									</Typography>
									<Typography className="title-r">Choisissez votre abonnement</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator >
									<TimelineConnector sx={{ width: '3px' }} />
									<TimelineDot color="primary" sx={{ padding: "0.8em" }}>
										<AddShoppingCartIcon sx={{ fontSize: "3em" }} />
									</TimelineDot>
									<TimelineConnector sx={{ width: '3px' }} />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '2em', px: 2 }}>
									<Typography variant="h5" component="span" className="title-pb">
										Ajoutez vos jeux
									</Typography>
									<Typography className="title-r">Ajoutez les jeux que vous empruntez à votre liste</Typography>
								</TimelineContent>
							</TimelineItem>
							<TimelineItem>
								<TimelineSeparator>
									<TimelineConnector sx={{ width: '3px' }} />
									<TimelineDot color="secondary" sx={{ padding: "0.6em" }}>
										<LocalShippingIcon sx={{ fontSize: "2em" }} />
									</TimelineDot>
									<TimelineConnector sx={{ width: '3px' }} />
								</TimelineSeparator>
								<TimelineContent sx={{ py: '2em', px: 2 }}>
									<Typography variant="h5" component="span" className="title-pb">
										Recevez vos jeux
									</Typography>
									<Typography className="title-r">Chaque mois nous vous livrons votre sélection chez vous !</Typography>
								</TimelineContent>
							</TimelineItem>
						</Timeline >
					</Grid >

				</Grid >


			</Container >
		</Box >
	);
}
export default HowItWorks