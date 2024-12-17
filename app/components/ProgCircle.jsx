import { CircularProgress } from '@nextui-org/progress'
import React from 'react'
import { ButtonGroup, Button } from '@nextui-org/button';





const ProgCircle = () => {



    return (

        <div className="flex flex-wrap gap-4 items-center">
            <Button color="primary" variant="solid">
                Solid
            </Button>
            <Button color="primary" variant="faded">
                Faded
            </Button>
            <Button color="primary" variant="bordered">
                Bordered
            </Button>
            <Button color="primary" variant="light">
                Light
            </Button>
            <Button color="primary" variant="flat">
                Flat
            </Button>
            <Button color="primary" variant="ghost">
                Ghost
            </Button>
            <Button color="primary" variant="shadow">
                Shadow
            </Button>
        </div>

    )
}

export default ProgCircle