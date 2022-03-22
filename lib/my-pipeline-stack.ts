import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { MyPipelineAppStage } from './my-pipeline-app-stage';
const envAU  = { account: "106422629973", region: "ap-southeast-2" };

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {

        input: CodePipelineSource.gitHub('alexlaverty/my-pipeline', 'main',{
          authentication: cdk.SecretValue.secretsManager('github-token')
        }),

        commands: ['npm ci', 'npm run build', 'npx cdk synth']      
          
      })
    });

    pipeline.addStage(new MyPipelineAppStage(this, "test", {
      env: envAU
    }));

  }
}