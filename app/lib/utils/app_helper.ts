export class AppHelperFn {
  static remove_whitespace(props: string): string {
    return props.replace(/ /g, "");
  }

  static truncate_string(props: { input: string; length: number }) {
    if (props.input.length > props.length) {
      return props.input.substring(0, props.length) + "...";
    }
    return props.input;
  }
}
