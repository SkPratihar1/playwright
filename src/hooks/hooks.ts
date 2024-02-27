
import { Before, After } from '@cucumber/cucumber';


Before(async function () {
  
  console.log('Before hook: Running setup tasks...');
});


After(async function () {
  
  console.log('After hook: Running teardown tasks...');
});