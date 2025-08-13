# VStepper

Vaadin 24 VStepper addon

## Changes from original

- Used automatic conversion from polymer to lit template: https://github.com/vaadin/flow/tree/main/flow-polymer2lit
- Replaced deprecated Label-Elements with Span

## Publishing to Vaadin Directory

You can create the zip package needed for [Vaadin Directory](https://vaadin.com/directory/) using
```
mvn versions:set -DnewVersion=1.0.0 # You cannot publish snapshot versions 
mvn install -Pdirectory
```

For more information or to upload the package, visit https://vaadin.com/directory/my-components?uploadNewComponent
