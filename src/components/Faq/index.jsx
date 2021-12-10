import * as React from 'react';
import {Container,Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
export default function Faq() {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<Container>
			<Accordion 
				expanded={expanded === 'panel1'} 
				sx={{ border: "1px solid", borderColor: "primary.main" }}
				onChange={handleChange('panel1')} 
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					align="center"
				>
					<Typography sx={{ color: 'text.primary' }}>
						Comment rendre les jeux que je ne souhaite plus ?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Tous les mois, nous récupérons les jeux que vous ne souhaitez plus au même moment que nous vous livrons les nouveaux jeux que vous avez ajouté à votre liste.
						Si c'est la fin de votre abonnement et que vous ne souhaitez pas le renouveler, nous viendrons récupérer l'ensemble des jeux.
						Vous recevrez un email 3 jours avant notre passage.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion 
				expanded={expanded === 'panel2'} 
				sx={{ border: "1px solid", borderColor: "primary.main" }}
				onChange={handleChange('panel2')} 
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
				>
					<Typography sx={{ color: 'text.primary' }}>
						Comment sélectionner mes jeux du mois ?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Il faut pour cela que vous cliquiez sur le bouton "Ajouter à ma liste" au niveau du jeu.
						De cette manière le jeu va être ajouté à votre liste "Mes jeux".
						Tous les mois, vous pouvez modifier cette liste à votre convenance (dans la limite de la quantité de jeux prévue dans votre abonnement), la liste des jeux sera bloqué le dernier jours de chaque mois et nous vous livrerons ensuite les nouveaux jeux.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion 
				expanded={expanded === 'panel3'} 
				onChange={handleChange('panel3')}
				sx={{ border: "1px solid", borderColor: "primary.main" }}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
				>
					<Typography sx={{ color: 'text.primary' }}>
						Quand les jeux sont-ils livrés / récupérés ?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Après avoir activé votre compte, choisissez vos jeux et validez votre liste de jeux.
						A chaque début de mois vous pourrez ensuite planifier vos location du mois suivant dans la page "Jeux".
						Sélectionnez un nombre de jeux équivalent au nombre de jeux de votre abonnement et validez le, vous recevrez ensuite un mail de confirmation.
						Votre abonnement démarre le jour de la réception de vos jeux.
						Les mois suivants, si vous modifiez votre liste de jeux, nous vous livrerons les nouveaux jeux sélectionnés et nous récupérerons ceux que vous ne souhaitez plus par la même occasion.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion 
				expanded={expanded === 'panel4'} 
				onChange={handleChange('panel4')}
				sx={{ border: "1px solid", borderColor: "primary.main" }}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
				>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>Que se passe-t-il si je casse ou perds une partie d’un jeu ?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Pas de panique. Chez Gameflix, faute avouée est à moitié pardonnée.
						Si vous nous indiquez une petite pièce perdue ou manquante (un pion, une carte...), nous retiendrons 1€ sur votre prochain mois de livraison.
						Si le dégât est plus important (plateau détruit, partie entière d’un jeu manquante), nous retiendrons un montant proportionnel à la perte.
						Si le jeu revient non-fonctionnel, nous vous le facturerons au prix de vente neuf sur notre site.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Container>
	);
}
