'use client'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import ObtainComponent from "./TabsBody/ObtainComponent";
import PredictComponent from "./TabsBody/PredictComponent"

export default function TabsComponent(){
      return (
        <div className="flex w-full flex-col">
        <Tabs>
          <Tab key="optain" title="Obtain">
            <Card>
              <CardBody>
                <ObtainComponent />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="predict" title="Predict">
            <Card>
              <CardBody>
                <PredictComponent />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      );
}


