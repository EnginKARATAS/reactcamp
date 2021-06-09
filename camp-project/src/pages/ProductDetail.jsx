import React from 'react'
import useParams from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'

export default function ProductDetail() {
    let { id } = useParams()
    return (
        <div>
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='/images/avatar/large/jenny.jpg'
                        />
                        <Card.Header>Jenny Lawrence</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Jenny requested permission to view your contact details
        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
          </Button>
                            <Button basic color='red'>
                                Decline
          </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
