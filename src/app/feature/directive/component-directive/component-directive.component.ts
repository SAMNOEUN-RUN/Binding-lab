import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  template: `
  <h1>Welcome, {{ name }} !</h1>
  
<div class="p-6 bg-white rounded-2xl shadow-md">
  <h2 class="text-2xl font-bold mb-4 text-teal-600">3. Directives in Angular</h2>

  <p class="mb-4">
    <strong>What is a Directive?</strong><br>
    A directive is a special instruction in the template that tells Angular how to modify the DOM (HTML) or the behavior of elements.
  </p>

  <p class="mb-4">There are 3 types of directives:</p>

  <table class="w-full border border-gray-300 rounded-lg overflow-hidden">
    <thead class="bg-gray-100">
      <tr>
        <th class="border border-gray-300 px-4 py-2 text-left">Type</th>
        <th class="border border-gray-300 px-4 py-2 text-left">Purpose</th>
        <th class="border border-gray-300 px-4 py-2 text-left">Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-semibold">Component</td>
        <td class="border border-gray-300 px-4 py-2">A directive with a template (every Angular component is actually a directive)</td>
        <td class="border border-gray-300 px-4 py-2">&lt;app-my-component&gt;&lt;/app-my-component&gt;</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-300 px-4 py-2 font-semibold">Structural Directive</td>
        <td class="border border-gray-300 px-4 py-2">Changes DOM layout by adding/removing elements</td>
        <td class="border border-gray-300 px-4 py-2"><code>*ngIf</code>, <code>*ngFor</code></td>
      </tr>
      <tr>
        <td class="border border-gray-300 px-4 py-2 font-semibold">Attribute Directive</td>
        <td class="border border-gray-300 px-4 py-2">Changes the appearance or behavior of an element</td>
        <td class="border border-gray-300 px-4 py-2"><code>[ngClass]</code>, <code>[ngStyle]</code>, custom directive</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 class="text-xl font-bold text-purple-600 mb-4">A. Structural Directives</h2>

      <!-- 2. *ngFor -->
      <div>
        <h3 class="text-lg font-semibold text-gray-700 mb-2">2. <code>*ngFor</code> – Loop Through Arrays</h3>
        <p class="mb-2 text-gray-600">Use <code>*ngFor</code> to repeat elements for each item in a list.</p>

        <ul class="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-2">
          <li *ngFor="let item of items; let i = index" class="text-sm font-mono">
            {{ i + 1 }}. {{ item }}
          </li>
        </ul>

        <p class="mt-2 text-gray-600 text-sm">
          <code>let i = index</code> gives the current position in the loop (starting from 0).
        </p>
      </div>
    </div>
  
  `
})
export class ComponentDirectiveComponent {
  name = 'samnoeun';
}