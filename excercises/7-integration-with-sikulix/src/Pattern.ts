import * as java from  'java';

java.classpath.push("lib/sikulixapi-2.0.1.jar");

function pattern(image: string){
	return java.newInstanceSync("org.sikuli.script.Pattern", path.resolve("img","Result.png") )
}
export {pattern};
