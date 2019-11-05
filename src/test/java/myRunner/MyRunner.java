package myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\TRAINING_H2A.06.17\\Desktop\\Selenium\\Login\\Feature\\Login.feature",
glue= {"stepDefinitions"},
plugin= {"pretty","json:target/TestMeApp.json"})
public class MyRunner {

}
