import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as eks from 'aws-cdk-lib/aws-eks';


export class MyEksStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
    // provisiong a cluster
    const cluster = new eks.Cluster(this, 'hello-eks', {
        version: eks.KubernetesVersion.V1_21,
    });
    
    // apply a kubernetes manifest to the cluster
    cluster.addManifest('mypod', {
        apiVersion: 'v1',
        kind: 'Pod',
        metadata: { name: 'mypod' },
        spec: {
        containers: [
            {
            name: 'hello',
            image: 'paulbouwer/hello-kubernetes:1.5',
            ports: [ { containerPort: 8080 } ],
            },
        ],
        },
    });



    }
}