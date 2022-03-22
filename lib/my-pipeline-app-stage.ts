import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { MyEksStack } from './my-pipeline-eks-stack';

export class MyPipelineAppStage extends cdk.Stage {
    
    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
      super(scope, id, props);
  
      const eksStack = new MyEksStack(this, 'EksStack');      
    }
}