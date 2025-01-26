import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  imports: [BaseChartDirective],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  standalone: true,
})
export class AdminDashboardComponent {
  // Bar Chart Configuration
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
  ];

  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { data: [65, 59, 80, 81, 56], label: 'Sales' },
      { data: [28, 48, 40, 19, 86], label: 'Expenses' },
    ],
  };

  public pieChartData: ChartData<'pie'> = {
    labels: ['Electronics', 'Clothing', 'Groceries'],
    datasets: [
      {
        data: [300, 500, 200],
      },
    ],
  };
}
