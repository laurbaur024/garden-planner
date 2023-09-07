


import { Card, CardBody, Editable, EditablePreview, EditableInput, Button, CardHeader, Heading, Stack, StackDivider, Box, UnorderedList, ListItem} from '@chakra-ui/react'



export default function PlantSearch () {
  const bold = {
    fontWeight: 'bold'
  }

  const button = {
    margin: '10px'
  }

  const card = {
    margin: '10px'
  }

  return (
    <>
      <div>
        <div>
          <Card>
            <CardBody>
          
              <Editable defaultValue='Search for a plant...'>
                <EditablePreview />
                  <EditableInput />
              </Editable>
              <Button style={button} colorScheme='orange'>Search</Button>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <Heading size='md'>Search Results for <span>Tomato</span></Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='s' textTransform='uppercase'> Roma Tomato </Heading>
                </Box>
                <Box>
                  <img src='https://hgshydro.com:5001/blog/hgs.19105c12-3b2c-4035-9b68-934641c3f27b_default.jpg' alt='Picture of Plant'/>
                </Box>
                <Box>
                  <UnorderedList>
                    <ListItem><span style={bold}>Type: </span>Vegetable</ListItem>
                    <ListItem><span style={bold}>Sow Space: </span>36</ListItem>
                    <ListItem><span style={bold}>Climbing: </span>no</ListItem>
                    <ListItem><span style={bold}>Sun: </span>full</ListItem>
                    <ListItem><span style={bold}>Grow Zone: </span>Grows best in zone 3 or higher</ListItem>
                    <ListItem><span style={bold}>Annual: </span>Yes</ListItem>
                    <ListItem><span style={bold}>Maturity: </span>70-80 days</ListItem>
                  </UnorderedList>
                </Box>
              </Stack>
              <div>
                <Button style={button} colorScheme='orange'>Add to Favorites</Button>
                <Button style={button} colorScheme='orange'>Add to Garden</Button>
              </div>
            </CardBody>
          </Card>
        </div>    
      </div>
    </>
  )
}

