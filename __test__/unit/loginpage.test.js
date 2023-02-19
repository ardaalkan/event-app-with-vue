import { mount } from "@vue/test-utils";
import Login from "@/views/Login_Page.vue";

// eslint-disable-next-line no-undef
describe("Login", () => {
  // eslint-disable-next-line no-undef
  it("submitting form triggers onSubmit method", () => {
    const wrapper = mount(Login);
    // eslint-disable-next-line no-undef
    const onSubmitMock = jest.fn();
    wrapper.vm.onSubmit = onSubmitMock;
    wrapper.find("button").trigger("click");
    // Checks if the function has been called.
    // eslint-disable-next-line no-undef
    expect(onSubmitMock).toHaveBeenCalled();
  });
});
