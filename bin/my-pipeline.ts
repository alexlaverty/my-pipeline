#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyPipelineStack } from '../lib/my-pipeline-stack';

const envAU  = { account: "106422629973", region: "ap-southeast-2" };


const app = new cdk.App();
new MyPipelineStack(app, 'MyPipelineStack', {
  env: envAU
});

app.synth();