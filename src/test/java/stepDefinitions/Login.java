package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class Login {
	WebDriver Driver;
	@Given("navigate to home page")
	public void navigate_to_home_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "c:\\My_Drivers\\chromedriver_win32\\chromedriver.exe");
		Driver = new ChromeDriver();
		Driver.get("http://demowebshop.tricentis.com");
		Thread.sleep(2000);
	}
	
	@When("user enters {string} and {string}")
	public void user_enters_and(String string,String string2) throws InterruptedException {
		Driver.findElement(By.xpath("//a[text()='Log in']")).click();
		Thread.sleep(3000);
		Driver.findElement(By.xpath("//input[@name='Email']")).sendKeys(string);;
		Driver.findElement(By.xpath("//input[@name='Password']")).sendKeys(string2);
		Driver.findElement(By.xpath("//input[@value='Log in']")).click();
		Thread.sleep(3000);
	}
	
	@Then("Message login sucessfully")
	public void message_login_sucessfully() {
		String title_new = Driver.getTitle();
		Assert.assertEquals(title_new,"Demo Web Shop");
			System.out.println("Successfull Login");
			Driver.close();
	}
}
