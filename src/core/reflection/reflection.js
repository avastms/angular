'use strict';var reflector_1 = require('./reflector');
var reflector_2 = require('./reflector');
exports.Reflector = reflector_2.Reflector;
exports.ReflectionInfo = reflector_2.ReflectionInfo;
var reflection_capabilities_1 = require('./reflection_capabilities');
/**
 * The {@link Reflector} used internally in Angular to access metadata
 * about symbols.
 */
exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtb0xKRzl3SmIudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSwwQkFBd0IsYUFBYSxDQUFDLENBQUE7QUFDdEMsMEJBQXdDLGFBQWEsQ0FBQztBQUE5QywwQ0FBUztBQUFFLG9EQUFtQztBQUN0RCx3Q0FBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUVqRTs7O0dBR0c7QUFDUSxpQkFBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLGdEQUFzQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHlwZSwgaXNQcmVzZW50fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtMaXN0V3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9jb2xsZWN0aW9uJztcbmltcG9ydCB7UmVmbGVjdG9yfSBmcm9tICcuL3JlZmxlY3Rvcic7XG5leHBvcnQge1JlZmxlY3RvciwgUmVmbGVjdGlvbkluZm99IGZyb20gJy4vcmVmbGVjdG9yJztcbmltcG9ydCB7UmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcyc7XG5cbi8qKlxuICogVGhlIHtAbGluayBSZWZsZWN0b3J9IHVzZWQgaW50ZXJuYWxseSBpbiBBbmd1bGFyIHRvIGFjY2VzcyBtZXRhZGF0YVxuICogYWJvdXQgc3ltYm9scy5cbiAqL1xuZXhwb3J0IHZhciByZWZsZWN0b3IgPSBuZXcgUmVmbGVjdG9yKG5ldyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzKCkpO1xuIl19