import { mount } from "@vue/test-utils";
import Register from "@/views/Register_Page.vue";

// eslint-disable-next-line no-undef
describe("Register.vue", () => {
  // eslint-disable-next-line no-undef
  it("should enable submit button when form is valid", async () => {
    const wrapper = mount(Register);

    // Fill in the form with valid data
    await wrapper.find("#username").setValue("john");
    await wrapper.find("#psw").setValue("John Doe");
    await wrapper.find("#psw-repeat").setValue("Password123");

    // Trigger a form submit event
    await wrapper.find(".registerbtn").trigger("click");

    // Check that the submit button is enabled
    // eslint-disable-next-line no-undef
    expect(wrapper.find(".registerbtn").attributes("disabled")).toBeUndefined();
  });

  //   it('should disable submit button when form is invalid', async () => {
  //     const wrapper = mount(Register);

  //     // Fill in the form with invalid data
  //     await wrapper.find('#username').setValue('');
  //     await wrapper.find('#psw').setValue('');
  //     await wrapper.find('#psw-repeat').setValue('');

  //     // Trigger a form submit event
  //     await wrapper.find('.registerbtn').trigger('click');

  //     // Check that the submit button is disabled
  //     expect(wrapper.find('.registerbtn').attributes('disabled')).toBe('disabled');
  //   });
});
