export class AppHelperFn {
  static remove_whitespace(props: string): string {
    return props.replace(/ /g, "");
  }
}
