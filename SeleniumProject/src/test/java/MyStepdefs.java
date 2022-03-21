import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.commons.lang.RandomStringUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class MyStepdefs {
    WebDriver driver;


    @Given("I invoke chrome driver")
    public void iInvokeChromeDriver() {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\S542361\\Downloads\\chromedriver_win32\\chromedriver.exe");
        driver = new ChromeDriver();
    }

    @Given("I login into application url {string}")
    public void iLoginIntoApplicationUrl(String url) {
        driver.get(url);
    }

    @And("I click on Register")
    public void iClickOnRegister() {
        driver.findElement(By.xpath("//button[text()='btn']")).click();
        driver.findElement(By.xpath("//a[text()='Register']")).click();
    }

    @And("I quit the browser")
    public void iQuitTheBrowser() {
        driver.quit();
    }

    @And("I click on login")
    public void iClickOnLogin() {
        driver.findElement(By.xpath("//a[text()='Login']")).click();

    }

    @When("I click on Login button")
    public void iClickOnLoginButton() {
        driver.switchTo().parentFrame();
        driver.findElement(By.xpath("//button[text()=' Login ']")).click();
    }

    @Then("I validate error message")
    public void iValidateErrorMessage() throws InterruptedException {
        Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Username is required']")).getText().equals("Username is required"));
        Assert.assertTrue(driver.findElement(By.xpath("//div[text()='Password is required']")).getText().equals("Password is required"));
    }

    @And("I enter user First name {string}")
    public void iEnterUserFirstName(String firstName) {
        driver.switchTo().parentFrame();
        driver.findElement(By.cssSelector("form>div:nth-child(1)>input")).sendKeys(firstName);
    }

    @And("I enter user Last name {string}")
    public void iEnterUserLastName(String lastName) {
        driver.findElement(By.cssSelector("form>div:nth-child(2)>input")).sendKeys(lastName);
    }

    @And("I enter username")
    public void iEnterUsername() {
        String userName = RandomStringUtils.randomAlphabetic(8);
        driver.findElement(By.cssSelector("form>div:nth-child(3)>input")).sendKeys(userName+"@gmail.com");
    }

    @And("I enter password {string}")
    public void iEnterPassword(String password) {
        driver.findElement(By.cssSelector("form>div:nth-child(4)>input")).sendKeys(password);
    }

    @Then("I click on register button")
    public void iClickOnRegisterButton() {
        driver.findElement(By.xpath("//button[text()=' Register ']")).click();
    }

    @Then("I validate register successfully")
    public void iValidateRegisterSuccessfully() {
//        String validationMessage = driver.findElement(By.xpath("//span[text()='User registered successfully']")).getText();
//        Assert.assertEquals(validationMessage,"User registered successfully");
    }

    @Then("I validate Welcome Page loaded sucessfully")
    public void iValidateWelcomePageLoadedSucessfully() {
        driver.findElement(By.xpath("tf")).getText();
        String m = driver.findElement(By.xpath("//h4[text()='Welcome To Handy HandOuts']")).getText();
        System.out.println("Page Loaded successfully" +m);
    }
}
