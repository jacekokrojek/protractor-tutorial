import * as java from  'java';

java.classpath.push("lib/sikulixapi-2.0.1.jar");

let app: any = java.newInstanceSync("org.sikuli.script.App");

export {app};
