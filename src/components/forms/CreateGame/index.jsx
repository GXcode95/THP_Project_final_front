import { Container, Typography, Box, TextField, Button} from '@mui/material';
import NumberField from '../GameInput/NumberField';

const CreateGame = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      description: data.get('description'),
      creator: data.get('creator'),
      editor: data.get('editor'),
      age: data.get('age'),
      min_players: data.get('min players'),
      max_players: data.get('max players'),
      released_date: data.get('released_date'),
      price: data.get('price')
    });
  };

  return (
    <Container component="main" maxWidth="xs">

        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center",
        >
          <Typography variant="h2" color="primary" >
            Ajouter un jeu
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nom du jeu"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type="textarea"
              multiline
              minRows="3"
              name="description"
              label="Description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="creator"
              label="Créateurs"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="editor"
              label="Éditeur"
            />
                
            <NumberField name={"age"} />

            <NumberField name={"min players"} />

            <NumberField name={"max players"} />

            <NumberField name={"price"} />
            
            <TextField
              margin="normal"
              name="released_date"
              label="Date de parution"
              type="date"
              defaultValue="jj/mm/aaaa"
              width={220}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Valider
            </Button>
          </Box>
        </Box>
      </Container>
  );
};

export default CreateGame;