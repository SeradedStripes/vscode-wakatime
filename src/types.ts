import * as vscode from 'vscode';

interface FileSelection {
  selection: vscode.Position;
  lastHeartbeatAt: number;
}

export interface FileSelectionMap {
  [key: string]: FileSelection;
}
