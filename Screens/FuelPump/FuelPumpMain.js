import React from 'react'
import FuelCollectReturn from '../../src/components/FuelCollectReturn'
import FuelPump from '../../src/components/FuelPump'
import HeaderComponent from '../../src/components/Header/HeaderComponent'

import { MaterialScrollView, MaterialWrapper } from '../Material/MaterialStyle'


const FuelPumpMain = (props) => {
    return (
        <MaterialWrapper>
            <HeaderComponent
                goBack={() => props.navigation.goBack()}
                text="Fuel Pump"
                rightText="Select all"
                headerRightTextColor="#004A7F"
            />
            <MaterialScrollView>
            <FuelCollectReturn
                IconName={'checksquareo'}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
                collect={'Collect'}
                Return={'Return'}
            />
            <FuelCollectReturn
                IconName={'checksquareo'}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
                collect={'Collect'}
                Return={'Return'}
            />
            <FuelCollectReturn
                IconName={'checksquareo'}
                JobName={'Fuel Pump'}
                toCollect={'To Collect'}
                RequestedDate={'2 Oct 2021'}
                CollectionDate={'10 Oct 2021'}
                collect={'Collect'}
                Return={'Return'}
            />
            </MaterialScrollView>
        </MaterialWrapper>
    )
}

export default FuelPumpMain
